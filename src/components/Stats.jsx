import PropTypes from 'prop-types';
import css from './Stats.module.css'
function generateRandomColor() {
  const randomColor = Math.round(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
export const Statistics = ({title, stats}) =>{
    return (
<section className={css.statistics}>
{title.length > 0 ? (
        <h2 className={css.title}>{title}</h2>
      ) :
      (
        <h2 className={css.title_disabled}> </h2>
      )}
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
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };