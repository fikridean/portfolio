import { CertificateElements } from "./elements";

export default function CertificateList() {
  return (
    <div className="row card certificate-mobile" id="certificate-mobile" data-aos="zoom-in">
      <div className="col-12 col-s-12">
       {CertificateElements}
      </div>
    </div>
  )
}