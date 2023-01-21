import s from './filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;
