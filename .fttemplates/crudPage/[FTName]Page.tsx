import { [FTName]sPageProps } from './types';
import { T[FTName] } from 'src/features/types';
import SectionBox from '@molecules/SectionBox/SectionBox';
import { PageContent } from '@templates/index';
import { Card, IconButton } from '@molecules';
import Dialog from '@molecules/Dialog/Dialog';
import { [FTName]_FORM_SCHEMA } from './constants';
import { useState } from 'react';
import StandardForm from '@organisms/StandardForm/StandardForm';
import { DeepPartial } from 'react-hook-form';
import { CrudErrorInfo } from 'src/utils/types/error.types';
import { useCreate[FTName], useDelete[FTName], useGet[FTName]s, useUpdate[FTName] } from 'src/features/[FTName]/api';

const INITIAL_[FTName]: DeepPartial<T[FTName]> = {
  title: '',
  content: '',
  image: '',
};

const [FTName]sPage: React.FC<[FTName]sPageProps> = ({  ...rest }) => {
  const [editPopupOpen, setEditPopupOpen] = useState(false);
  const [active[FTName], setActive[FTName]] = useState<DeepPartial<T[FTName]>>(INITIAL_[FTName]);
  const [errors, setErrors] = useState<CrudErrorInfo<T[FTName]>>([]);

  const handleClickAdd[FTName] = () => {
    setEditPopupOpen(true);
  };

  const { data, error, isLoading } = useGet[FTName]s({});

  const deleteA[FTName] = useDelete[FTName]();
  const createA[FTName] = useCreate[FTName]();
  const updateA[FTName] = useUpdate[FTName]();

  const requestCreate[FTName] = async (values: T[FTName]) => {
    return await createA[FTName].mutate(values);
  };

  const requestEdit[FTName] = (values: T[FTName]) => {
    return updateA[FTName].mutate(values);
  };

  const requestDelete[FTName] = ([FTName]: T[FTName]) => {
    deleteA[FTName].mutate([FTName]);
  };

  const handleClosePopup = () => {
    setEditPopupOpen(false);
  };

  const handleSubmitForm = (values: Partial<T[FTName]>) => {
    setEditPopupOpen(false);
    if (active[FTName]?.id) {
      requestEdit[FTName]({ ...active[FTName], ...values } as T[FTName]);
    }
    requestCreate[FTName](values as T[FTName]);
  };

  const [FTName]S_ACTIONS = [
    {
      label: '+ Add',
      startIcon: 'add',
      onClick: handleClickAdd[FTName],
    },
  ];

  return (
    <PageContent>
      <SectionBox title='[FTName]s' actions={[FTName]S_ACTIONS}>
        <div className='flex flex-col space-y-4'>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {data?.map(([FTName]) => (
            <Card key={[FTName].id}>
              {[FTName].title} <IconButton name='CloseX' onClick={() => requestDelete[FTName]([FTName])} />
            </Card>
          ))}
        </div>
      </SectionBox>
      <Dialog
        isOpen={editPopupOpen}
        handleClose={handleClosePopup}
        title='Create a new [FTName]'
        description={'this is a description'}
      >
        <StandardForm
          config={[FTName]_FORM_SCHEMA}
          onSubmit={handleSubmitForm}
          initialValues={active[FTName]}
          errors={errors}
        />
      </Dialog>
    </PageContent>
  );
};

export default [FTName]sPage;
