let utils={
    // 补零
    toZero:(data)=>{
        if(data<10){
            return '0'+data
        }
        return data.toString()
    },

    // 时间格式化
    timeFormait:(date)=>{
        if(!date){
            return 
        }
        let data =  new Date(+date);
        return [
            data.getFullYear(),
            utils.toZero(data.getMonth()+1),
            utils.toZero(data.getDate()),
        ].join('-')+' '+[
            utils.toZero(data.getHours()),
            utils.toZero(data.getMinutes()),
            utils.toZero(data.getSeconds())
        ].join(':')
    }
}

export default utils