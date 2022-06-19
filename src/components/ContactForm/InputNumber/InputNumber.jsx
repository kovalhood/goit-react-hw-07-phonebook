import PropTypes from 'prop-types';
import s from './InputNumber.module.css';

const InputNumber = ({ phone, onNumberChange}) => {
    return <input
      type="tel"
      name="phone"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      placeholder='Enter number'
      value={phone}
      onChange={onNumberChange}
      className={s.input}
      // onKeyPress={(event) => {
      //   if (!/[+-0-9/(/)/]/.test(event.key)) {
      //     event.preventDefault();
      //   }
      // }}
    />
}

InputNumber.propTypes = {
  phone: PropTypes.string.isRequired
}

export default InputNumber;