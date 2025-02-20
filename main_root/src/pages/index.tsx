import LayoutPage from '@/layout/index';
import 'zone.js/dist/zone';
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  addGlobalUncaughtErrorHandler,
} from 'qiankun';
import { Microconfig } from '@/registerMicroAppsConfig';
/**
 * 注册微应用
 */
registerMicroApps(Microconfig, {
  // qiankun 生命周期钩子 - 微应用加载前
  beforeLoad: (app: any) => {
    console.log('before load', app.name);
    return Promise.resolve();
  },
  // qiankun 生命周期钩子 - 微应用挂载后
  afterMount: (app: any) => {
    console.log('after mount', app.name);
    return Promise.resolve();
  },
});

/**
 * 启动 qiankun
 */
// start();
start({
  prefetch: true, // 开启预加载
  sandbox: {
    experimentalStyleIsolation: true, //   开启沙箱严格模式,实验性方案
  },
});

/**
 * 设置主应用启动后默认进入的微应用
 * 对应子应用的 activeRule
 */
// setDefaultMountApp('/purehtml');

// 添加全局异常捕获
// addGlobalUncaughtErrorHandler((handler) => {
//   console.log('异常捕获', handler);
// });



export default function IndexPage({ children }: any) {
  return (
    <LayoutPage>
      <div>{children}</div>
      <div id="subContainer"></div>
    </LayoutPage>
  );
}
