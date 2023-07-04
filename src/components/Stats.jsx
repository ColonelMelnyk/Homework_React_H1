import PropTypes from 'prop-types';
export const Statistics = ({data}) =>{
    return (
<section class="statistics">
<ul class="stat-list">
    {data.map(dat =>(
       <li class="item"  key={dat.id}>
       <span class="label">{dat.label}</span>
       <span class="percentage">{dat.percentage}%</span>
       </li> 
    ))}
</ul>
</section>
    );
};

Statistics.PropTypes ={
 label: PropTypes.string.isRequired,
 percentage: PropTypes.number.isRequired,
};