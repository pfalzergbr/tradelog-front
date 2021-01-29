import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import Select from '../../Shared/ui/formControl/Select';
import Button from '../../Shared/ui/Button';

const changeStrategySchema = yup.object().shape({
  strategy: yup.string().required(),
});

const ChangeStrategy = ({ accountId, strategyId, onSubmit }) => {
  const strategies = useSelector(state => state.strategy.strategies) || [];
  const accountStrategies = strategies.filter(
    strategy => strategy.account_id === accountId,
  );

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(changeStrategySchema),
    mode: 'onChange',
    defaultValues: {
      strategy: strategyId,
    },
  });

  return (
    <form
      className='trade-details__change-strategy'
      onSubmit={handleSubmit(onSubmit)}>
      <Select
        name='strategy'
        label='Strategy'
        optionsArray={accountStrategies}
        register={register}
        optionValue='strategy_id'
        optionName='strategy_name'
        hiddenLabel={true}
      />
      <Button buttonStyle='small-outline'>Change</Button>
    </form>
  );
};

export default ChangeStrategy;
