export default function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <i className={`${className} fas fa-chevron-right`} onClick={onClick}></i>
  );
}
