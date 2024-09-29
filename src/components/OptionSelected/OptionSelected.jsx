import styles from './OptionSelected.module.scss';

const OptionSelected = ({ onClick }) => {
  return (
    <div className={styles.optionSelect} onClick={onClick}></div>
  );
}

export default OptionSelected;
