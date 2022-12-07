const Schema = require('mongoose').Schema;

const habitSchema = new Schema({
    description: {type: String, required: true},
    frequency: {type: Number, default: 1, min: 0},
    completed: {type: Boolean, default: false},
    startDate: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
}, {
    timestamps: true,
    toJSON: { virtuals: true },
});

habitSchema.virtual('category').get(function() {
    if (this.frequency === 0) {
        return 'To-Do'
    } else if (this.frequency === 1) {
        return 'Daily'
    } else if (this.frequency === 2) {
        return 'Every other day'
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

habitSchema.virtual('startDateFormatted').get(function() {
    const startDate = this.startDate;
    const startDateDay = startDate.getDate();
    const startDateMonth = startDate.getMonth();
    const startDateYear = startDate.getFullYear();
    const startDateDate = new Date(startDateYear, startDateMonth, startDateDay);
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    const todayDate = new Date(todayYear, todayMonth, todayDay);
    const daysSinceStart = Math.floor((todayDate - startDateDate) / (1000 * 60 * 60 * 24));
    console.log('daysSinceStart:', daysSinceStart);
    if (daysSinceStart === 0) {
        return 'Today'
    } else if (daysSinceStart === 1) {
        return 'Yesterday'
    } else {
        return `${daysSinceStart} days`
    }
})

habitSchema.virtual('nextDueDate').get(function() {
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    const todayDate = new Date(todayYear, todayMonth, todayDay);
    const habitStartDate = new Date(this.startDate);
    const habitStartDateDay = habitStartDate.getDate();
    const habitStartDateMonth = habitStartDate.getMonth();
    const habitStartDateYear = habitStartDate.getFullYear();
    const habitStartDateDate = new Date(habitStartDateYear, habitStartDateMonth, habitStartDateDay);
    const daysSinceStart = Math.floor((todayDate - habitStartDateDate) / (1000 * 60 * 60 * 24));
    const daysSinceLastDue = daysSinceStart % this.frequency;
    const daysUntilNextDue = this.frequency - daysSinceLastDue;
    const nextDueDate = new Date(todayDate);
    nextDueDate.setDate(todayDay + daysUntilNextDue);
    return nextDueDate;
})

habitSchema.virtual('nextDueDateFormatted').get(function() {
    const nextDueDate = this.nextDueDate;
    const nextDueDateDay = nextDueDate.getDate();
    const nextDueDateMonth = nextDueDate.getMonth();
    const nextDueDateYear = nextDueDate.getFullYear();
    const nextDueDateDate = new Date(nextDueDateYear, nextDueDateMonth, nextDueDateDay);
    const today = new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    const todayDate = new Date(todayYear, todayMonth, todayDay);
    const daysUntilNextDue = Math.floor((nextDueDateDate - todayDate) / (1000 * 60 * 60 * 24));
    if (daysUntilNextDue === 0) {
        return 'Due today'
    } else if (daysUntilNextDue === 1) {
        return 'Due tomorrow'
    } else {
        return `Due in ${daysUntilNextDue} days`
    }
})

module.exports = habitSchema;
