import { ProjectsPageProps } from './types';
import SectionBox from '@molecules/SectionBox/SectionBox';
import { PageContent } from '@templates/index';
import { Card, IconButton } from '@molecules';
import Dialog from '@molecules/Dialog/Dialog';
import { PROJECT_FORM_SCHEMA } from './constants';
import { useState } from 'react';
import StandardForm from '@organisms/StandardForm/StandardForm';
import { DeepPartial } from 'react-hook-form';
import { CrudErrorInfo } from 'src/utils/types/error.types';
import { useCreateProject, useDeleteProject, useGetProjects, useUpdateProject } from 'src/features/Project/api';
import TProject from 'src/features/Project/types/project.type';

const INITIAL_PROJECT: DeepPartial<TProject> = {
  title: '',
  content: '',
  image: '',
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ children, ...rest }) => {
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<DeepPartial<TProject>>(INITIAL_PROJECT);
  const [errors, setErrors] = useState<CrudErrorInfo<TProject>>([]);

  const handleClickAddProject = () => {
    setEditPopupOpen(true);
  };

  const { data, error, isLoading } = useGetProjects({});

  const deleteAProject = useDeleteProject();
  const createAProject = useCreateProject();
  const updateAProject = useUpdateProject();

  const requestCreateProject = (values: TProject) => {
    return createAProject.mutate(values);
  };

  const requestEditProject = (values: TProject) => {
    return updateAProject.mutate(values);
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
    } else {
      requestCreateProject(values as TProject);
    }
    setActiveProject(INITIAL_PROJECT);
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
        <div className='flex flex-col space-y-4 items-center'>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {data?.map((project) => (
            <Card key={project.id} className='w-full'>
              {project.title && <h3 className='text-xl font-bold'>{project.title}</h3>}
              <IconButton name='CloseX' className='ml-auto' variant='text' onClick={() => requestDeleteProject(project)} />
              <IconButton
                name='Puzzle'
                variant='text'
                onClick={() => {
                  setActiveProject(project);
                  setEditPopupOpen(true);
                }}
              />
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
