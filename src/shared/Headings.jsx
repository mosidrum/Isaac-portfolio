import PropTypes from 'prop-types';

const Headings = ({title, subTitle}) => {
    return (
        <div className='text-center mx-auto md:w-2/3 my-8'>
          <h2 className='text-2xl font-bold tracking-wide mt-18 mb-5'>{title}</h2>
          <div className='divider'></div>
          <p className='text-tertiary text-xl leading-7 md:w-3/4 text-center mx-auto'>{subTitle}</p>
        </div>
    );
};

Headings.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Headings;