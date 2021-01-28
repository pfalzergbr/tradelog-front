export const setItemColor = outcome => {
  switch (outcome) {
    case 'loss':
      return 'red';
    case 'profit':
      return 'green';
    case 'breakeven':
      return 'purple';
    default:
      return '';
  }
};