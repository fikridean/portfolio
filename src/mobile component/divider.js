export default function Divider(props) {
  return (
    <div>
      <div class="row divider" id="certificate">
        <div class="col-12 col-s-12">
          <a href="javascript:;">
            <h1 data-aos="fade-up">📜 {props.title} 📜</h1>
          </a>
        </div>
      </div>
    </div>
  )
}