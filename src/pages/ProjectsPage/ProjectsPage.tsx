import { ProjectsPageProps } from './types';
import useInternalApi from '../../data-fetching/useInternalApi';
import { TProject } from 'src/data-fetching/types/Project.type';
import SectionBox from '@molecules/SectionBox/SectionBox';
import { PageContent } from '@templates/index';
import { PROJECTS_ACTIONS } from './constants';
import Button from '@molecules/Button/Button';
import { addProject, deleteProject, getProjects } from 'src/data-fetching/api-routes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, IconButton } from '@molecules';

const ProjectsPage: React.FC<ProjectsPageProps> = ({ children, ...rest }) => {
  const queryClient = useQueryClient();
  // TODO Create a hook to handle loading / error states
  const { data } = useInternalApi<TProject[], any>(getProjects, {});

  const createAProject = useMutation({
    mutationFn: addProject,
    onSuccess: (newProject) => {
      return queryClient.setQueryData([getProjects, {}], [newProject, ...(data as TProject[])]);
    },
  });

  const deleteAProject = useMutation({
    mutationFn: deleteProject,
    onSuccess: (deletedProject) => {
      return queryClient.setQueryData([getProjects, {}], data?.filter((p) => p.id !== deletedProject.id) as TProject[]);
    },
  });

  const handleCreateProject = () => {
    createAProject.mutate({ title: 'New Projecs1', content: 'Content', imageUrl: 'Test' });
  };

  const handleDeleteProject = (project: TProject) => {
    deleteAProject.mutate(project);
  };

  return (
    <PageContent>
      <SectionBox title='Projects' actions={PROJECTS_ACTIONS}>
        <div className='flex flex-col space-y-4'>
          {data?.map((project) => (
            <Card key={project.id}>
              {project.title} <IconButton name='CloseX' onClick={() => handleDeleteProject(project)} />{' '}
            </Card>
          ))}
        </div>
      </SectionBox>
      <Button onClick={handleCreateProject} label='Create Project' />
    </PageContent>
  );
};

export default ProjectsPage;
