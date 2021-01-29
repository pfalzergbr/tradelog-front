import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Button from '../../Shared/ui/Button';
import TextArea from '../../Shared/ui/formControl/TextArea';

const changeNotesSchema = yup.object().shape({
  notes: yup.string(),
});

const EditTradeNotes = ({ notes, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(changeNotesSchema),
    mode: 'onChange',
    defaultValues: {
      notes,
    },
  });

  return (
    <form className='trade-details__edit-notes' 
    onSubmit={handleSubmit(onSubmit)}>
      <TextArea
        label='Notes'
        placeholder='Notes'
        name='notes'
        register={register}
        errors={errors}
        hiddenLabel={true}
      />
      <Button buttonStyle='small-outline'>Confirm</Button>
    </form>
  );
};

export default EditTradeNotes;
