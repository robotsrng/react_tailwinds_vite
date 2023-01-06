import { ProjectsPageProps } from './types';
import useInternalApi from '../../data-fetching/useInternalApi';
import { TProject } from 'src/data-fetching/types/Project.type';
import SectionBox from '@molecules/SectionBox/SectionBox';
import { PageContent } from '@templates/index';
import { addProject, deleteProject, getProjects, editProject } from 'src/data-fetching/api-routes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, IconButton } from '@molecules';
import Dialog from '@molecules/Dialog/Dialog';
import { PROJECT_FORM_SCHEMA } from './constants';
import { useState } from 'react';
import StandardForm from '@organisms/StandardForm/StandardForm';
import { DeepPartial } from 'react-hook-form';
import { CrudErrorInfo, PrismaMutationError } from 'src/utils/types/error.types';

const ProjectsPage: React.FC<ProjectsPageProps> = ({ children, ...rest }) => {
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<DeepPartial<TProject>>();
  const [errors, setErrors] = useState<CrudErrorInfo<TProject>>([]);

  const handleClickAddProject = () => {
    setEditPopupOpen(true);
  };

  const queryClient = useQueryClient();
  // TODO Create a hook to handle loading / error states
  const { data } = useInternalApi<TProject[], any>(getProjects, {});

  const createAProject = useMutation({
    mutationFn: addProject,
    onSuccess: (newProject, ...rest) => {
      return queryClient.setQueryData([getProjects, {}], [newProject, ...(data as TProject[])]);
    },
    onError: (error: PrismaMutationError<TProject>, vars, ctx) => {
      // TODO set up toast for notifications
      setEditPopupOpen(true);
      setActiveProject(vars);
      setErrors(error.data);
    },
  });

  const editAProject = useMutation({
    mutationFn: editProject,
    onSuccess: (deletedProject) => {
      return queryClient.setQueryData([getProjects, {}], data?.filter((p) => p.id !== deletedProject.id) as TProject[]);
    },
    onError: (error:  PrismaMutationError<TProject>, vars, ctx) => {
      // TODO set up toast for notifications
      setEditPopupOpen(true);
      setActiveProject(vars);
      setErrors(error.data);
    },
  });

  const deleteAProject = useMutation({
    mutationFn: deleteProject,
    onSuccess: (deletedProject) => {
      return queryClient.setQueryData([getProjects, {}], data?.filter((p) => p.id !== deletedProject.id) as TProject[]);
    },
     onError: (error:  PrismaMutationError<TProject>, vars, ctx) => {
      // TODO set up toast for notifications
    },
  });

  const requestCreateProject = (values: TProject) => {
    return createAProject.mutate(values);
  };

  const requestEditProject = (values: TProject) => {
    return editAProject.mutate(values);
  };

  const requestDeleteProject = (project: TProject) => {
    deleteAProject.mutate(project);
  };

  const handleClosePopup = () => {
    setEditPopupOpen(false);
  };

  const handleSubmitForm = (values: Partial<TProject>) => {
    setEditPopupOpen(false);
    if (activeProject?.id) {
      requestEditProject({ ...activeProject, ...values } as TProject);
    }
    requestCreateProject(values as TProject);
  };

  const PROJECTS_ACTIONS = [
    {
      label: '+ Add',
      startIcon: 'add',
      onClick: handleClickAddProject,
    },
  ];

  return (
    <PageContent>
      <SectionBox title='Projects' actions={PROJECTS_ACTIONS}>
        <div className='flex flex-col space-y-4'>
          {data?.map((project) => (
            <Card key={project.id}>
              {project.title} <IconButton name='CloseX' onClick={() => requestDeleteProject(project)} />{' '}
            </Card>
          ))}
        </div>
      </SectionBox>
      <Dialog
        isOpen={editPopupOpen}
        handleClose={handleClosePopup}
        title='Create a new project'
        description={'this is a description'}
      >
        <StandardForm
          config={PROJECT_FORM_SCHEMA}
          onSubmit={handleSubmitForm}
          initialValues={activeProject}
          errors={errors}
        />
      </Dialog>
    </PageContent>
  );
};

export default ProjectsPage;
