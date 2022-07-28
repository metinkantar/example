import React from 'react'

export default function BulletinCard() {
  return (
    <>
      <div className="container-fluid bulletin-card py-5 bg-light">
        <div className="container d-flex justify-content-center">
          <div className="row">
              <p className="bulletin-title mb-1 text-center">Bizden Haberdar Olun</p>
              <p className="bulletin-desc mb-3 text-center">E-Bültene kayıt ol fırsat & indirimleri kaçırma!</p>
              <div className="newsLetter d-flex justify-content-center">
                <input type="email" className="p-2"  placeholder='E-mail adresinizi yazın...'/>
                <span className="btn btn-warning fw-bold">Abone Ol</span>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
