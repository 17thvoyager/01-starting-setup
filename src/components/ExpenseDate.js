import './ExpenseDate.css'

function ExpenseDate(Props) {
    const date = Props.date.toLocaleString( 'en-us', { day: '2-digit'});
    const month = Props.date.toLocaleString( 'en-us', { month: 'long'});
    const year = Props.date.getFullYear();

    return(
        <div class="expense-date">
            <div class="expense-date__month">{month}</div>
            <div class="expense-date__year">{year}</div>
            <div class="expense-date__day">{date}</div>
        </div>
    );

}

export default ExpenseDate;

