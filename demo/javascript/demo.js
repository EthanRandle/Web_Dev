const getBlogs =(cb) =>{
    setTimeout(() => {
        cb({
            title: 'welcome to JS'
        })
    }, 2000);
}
getBlogs((bp)=>{
    console.log(bp.title)
})
