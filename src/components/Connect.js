import { connect} from "react-redux";
import APP from "./App.js";
import  UpdatePost from "./Actions.js"


const mapStateToProps = (state)=>{
  return {
    post:state
  }
}

const mapDispatchToProps=(dispatch)=>{
return {
    Posting:(e)=>dispatch(UpdatePost(e))
}
}

const PostValue = connect(mapStateToProps,mapDispatchToProps)(APP)

export default PostValue