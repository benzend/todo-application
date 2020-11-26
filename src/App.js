import { makeStyles } from '@material-ui/core';

import { TodosPage } from './pages';

const useStyles = makeStyles(() => ({
  appHolder: {
    textAlign: 'center',
    fontFamily: '"Roboto", sans-serif',
  },
}));

export const App = () => {
  const { appHolder } = useStyles();

  return (
    <div className={appHolder}>
      <TodosPage />
    </div>
  );
};
