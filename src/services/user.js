import utils from "../utils/utils"
export default class UserService{
    signup(userdata){
        return utils.sendApiRequest("/user/signup","POST",userdata)
        .then((response)=>{
                if (!response.error) {
                  return response;
                } else {
                  return response;
                }
            
        },
        (error) => {
            throw new Error(error);
        }
        )
        .catch((err)=>{
            throw err;
        })
    }
    login(userdata){
      return utils.sendApiRequest("/user/login","POST",userdata)
            .then((response)=>{
              if(!response.error){
                return response
              }else{
                response
              }
            },
            (error)=>{
              throw new Error(error)
            }
            )
            .catch((err)=>{
              throw err ;
            })
    }
}