class ApiFeatures {
    constructor(query, querystr){
        this.query = query;
        this.querystr = querystr;
    }

    search(){
        if(this.querystr.keyword){
            const keywordRegExp = new RegExp(this.querystr.keyword, "i")
            this.query = this.query.find({ name: keywordRegExp});
        }
        return this;
    }
}

module.exports = ApiFeatures;