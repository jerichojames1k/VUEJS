import ROUTER from 'router';
export default {
    user: null,
    registeredUser:[],
    courses:[],
    setUser(user){
        this.user = user
    },
    getUser(user){
        return this.user = user;
    },
    register(email, password){
        this.registeredUser.push({
            email: email,
            password: password,
        })
        // var p = JSON.parse(JSON.stringify(this.registeredUser))
        // console.log(p)
        ROUTER.push('/login')
    },
    login(email,password){
        console.log(this.registeredUser)
        for(let i = 0; i < this.registeredUser.length; i++){
            if(this.registeredUser[i].email === email && this.registeredUser[i].password === password){
                ROUTER.push('/dashboard')
                return this.registeredUser[i]           
            }else{
                alert("Email or Password is incorrect!")
            }
        }
        return null
    },
    logout(){
        this.user = null
        ROUTER.push('/login')
    },
    addCourse(course, year){
        this.courses.push({
            course: course,
            year: year,
        });
        var p = JSON.parse(JSON.stringify(this.courses))
        console.log(p)
    }, 
    editProfile(){
        ROUTER.push('/edit')
    },
    save(email,password){
        for(let i = 0; i < this.registeredUser.length; i++){
            this.registeredUser[i].email=email,
            this.registeredUser[i].password=password
        }
        ROUTER.push('/personalinformation')
    }
}