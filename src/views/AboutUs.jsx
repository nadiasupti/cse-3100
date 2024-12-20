export default function AboutUs() {
    return (
        <div className="bg-white p-4 rounded-3 shadow-sm">

        <h2 className="text-center mb-4">About Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p>
              Welcome to Purrfect Adoption, where every cat finds their forever home. 
              We are dedicated to connecting loving families with cats in need of homes.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to ensure every cat finds a loving home while promoting responsible 
              pet ownership and animal welfare in our community.
            </p>
            <h3>Our Story</h3>
            <p>
              Founded in 2020, Purrfect Adoption has helped hundreds of cats find their forever homes. 
              We work closely with local shelters and rescue organizations to provide the best possible 
              care for our feline friends.
            </p>
          </div>
        </div>
        <h3 className="text-center mt-5">Our Team</h3>
        <div className="row justify-content-center">
        <div className="col-md-3 text-center">
          <div className="card">
            <div className="card-body">
              <div 
                style={{
                  width: '100%',
                  height: '150px',
                  backgroundColor: '#f0f0f0',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              ></div>
              <h5 className="card-title">Nadia Yeasmin</h5>
              <p className="card-text">Director</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
  