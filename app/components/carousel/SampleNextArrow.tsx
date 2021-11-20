export default function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
}
