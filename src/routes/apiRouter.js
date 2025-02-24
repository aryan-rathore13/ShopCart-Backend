const express=require('express');

const v1router=require('./v1/index');
const pingRouterV2=require('./v2/pingRoutesV2');
const apiRouter=express.Router();

apiRouter.use('/v1',v1router);
apiRouter.use('/v2',pingRouterV2);

module.exports=apiRouter;


