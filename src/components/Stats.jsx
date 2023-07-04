import PropTypes from 'prop-types';
import css from './Stats.module.css'
function generateRandomColor() {
  const randomColor = Math.round(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
export const Statistics = ({stats}) =>{
    return (
<section className={css.statistics}>
<h2 className={css.title}>Upload stats</h2>
<ul className={css.statlist}>
    {stats.map(stat =>(
       <li className={css.item}  key={stat.id}  style={{backgroundColor: generateRandomColor()}}>
       <span className={css.label}>{stat.label}</span>
       <span className={css.percentage}>{stat.percentage}%</span>
       </li> 
    ))}
</ul>
</section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };