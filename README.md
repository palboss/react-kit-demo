## react-kit-demo
react some little kits demo
### 1 react hook demo1 storeContext
    useContext,useReducer 实现全局store, 模拟Redux的store和Reducer
    [Hooks API参考](https://reactjs.org/docs/hooks-reference.html) 例子    
### 2 react hook demo2 slicereducer
	useContext,useReducer, 切片Reducer
    按域拆分数据（Separating Data Handling by Domain）
    通过切片组合 Reducer（Combining Reducers by Slice）
    [Reducerreducer 切片组合](https://www.redux.org.cn/docs/recipes/reducers/RefactoringReducersExample.html)
    #### 要点：
        Reducer返回值State是Json对象
        切片组合都是围绕Json对象的属性进行
        
    