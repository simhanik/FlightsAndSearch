const { where } = require("sequelize");

class CrudRepository {
    constructor(model){
        this.model=model
    }

    async create(data){
        try {
            const result = await this.model.create(data)
            return result
        } catch (error) {
            console.log("Something went wrong in the crud repo");
            throw error
        }
    }

    async destroy(modelId){
        try {
            await this.model.destroy({
                where:{
                    id:modelId
                }
            })
            return true
        } catch (error) {
            console.log("Something went wrong in the crud repo");
            throw error
        }
    }

    async get(modelId){
        try {
            const result = await this.model.findByPk(modelId)
            return result
        } catch (error) {
            console.log("Something went wrong in the crud repo");
            throw error
        }
    }

    async getAll(){
        try {
            const result = await this.model.findAll()
            return result
        } catch (error) {
            console.log("Something went wrong in the crud repo");
            throw error
        }
    }

    async update(modelId,data){
        try {
            const result = await this.model.findByPk(data,{
                where:{
                    id:modelId
                }
            })
        } catch (error) {
            console.log("Something went wrong in the crud repo");
            throw error
        }
    }
}

module.exports = CrudRepository