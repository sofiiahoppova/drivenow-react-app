import css from "./Carousel.module.css";

export const CustomSlide = (props) => {
  const { brand, ...otherProps } = props;
  return (
    <div className={css.item} {...otherProps}>
      <img
        className={css.image}
        src={`/images/CarBrands/${brand}.png`}
        alt={`${brand} Logo`}
      />
      <p>{brand}</p>
    </div>
  );
};
