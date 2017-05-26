# mm-dashboard-demo
Demo project for showcasing the mm-dashboard environment

## Run
1. `npm install`
2. `ng serve`
Unfortunately you'll get a weired message that says something like ...
'ERROR in Error encountered resolving symbol values statically. Calling function 'LineChartModule', function calls are not supported. Consider replacing the function or lambda with a reference to an exported function, resolving symbol AppModule in C:/_user/Code/dashboard/mm-dashboard-demo/src/app/app.module.ts, resolving symbol AppModule in C:/_user/Code/dashboard/mm-dashboard-demo/src/app/app.module.ts'

To resolve it...
3. re-save app.module.ts file after which the project will be rebuild successfully.
4. navigate to `localhost:4200`
