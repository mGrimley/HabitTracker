const Schema = require('mongoose').Schema;

const habbitSchema = new Schema({
    descrption: String,
    frequency: {type: Number, default: 1, min: 0},
    completed: Boolean,
    points: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});

habbitSchema.virtual('category').get(function() {
    if (this.frequency === 0) {
        return 'To-Do'
    } else if (this.frequency === 1) {
        return 'Daily'
    } else if (this.frequency === 7) {
        return 'Weekly'
    } else if (this.frequency === 30 || this.frequency === 31) {
        return 'Monthly'
    } else if (this.frequency === 365) {
        return 'Yearly'
    } else {
        return `Every ${this.frequency} days`
    }
})

module.exports = habbitSchema;