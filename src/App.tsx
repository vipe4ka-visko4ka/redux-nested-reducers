import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import settingsAction from "./redux/actions/settings.action";

import { RootState } from "./redux/store";

function App() {
  const account = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(settingsAction.addSettings({ accountId: 'uniqueId', setting: {} }));
  }, []);

  console.log(account);
  
  return <h1>App</h1>;
}

export default App;
