/*
 * @FilePath: action.ts
 * @Author: zyb
 * @Date: 2022-07-27 17:47:52
 * @LastEditors: zyb
 * @LastEditTime: 2022-07-27 17:54:33
 * Copyright: 2022 SIE CO.,LTD. All Rights Reserved.
 * @Descripttion: 全局状态
 */
import {
  initGlobalState,
  MicroAppStateActions,
} from 'qiankun';
const initState = {
  id: 'main_主应用',
};
const actions: MicroAppStateActions = initGlobalState(initState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('变更后的状态:', state);
  console.log('变更前的状态:', prev);
});

actions.setGlobalState({
  id: 'main_主应用666',
});

export default actions
