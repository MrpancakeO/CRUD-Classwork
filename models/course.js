const mongoose = require("mongoose"),
{  Schema } = require("mongoose"),
courseSchema = new Schema(
    {
        title: {
            type: String,
            required:true,
            unique: true
        },
        decription:{
            type: String,
            required: true
        },
        maxStudents:{
            type: Number,
            default: 0,
            min= [0,"Course can not have a negative number of students"]
        },
        cost:{
            type: Number,
            default: 0,
            min: [0,"Costs can not be a negative value"]
        }
    },
    {
        timestamps:true
    }
)

mongoose.exports = mongoose.model("Course", courseSchema);