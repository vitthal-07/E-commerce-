import TeamMember from "@/components/TeamMember";

export const teamMembersData = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", // Add your team images here
    linkedin: "https://www.linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    instagram: "https://www.instagram.com/johndoe",
    facebook: "https://www.facebook.com/johndoe",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "COO",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", // Add your team images here
    linkedin: "https://www.linkedin.com/in/janesmith",
    twitter: "https://twitter.com/janesmith",
    instagram: "https://www.instagram.com/janesmith",
    facebook: "https://www.facebook.com/janesmith",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Head of Operations",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg", // Add your team images here
    linkedin: "https://www.linkedin.com/in/alicejohnson",
    twitter: "https://twitter.com/alicejohnson",
    instagram: "https://www.instagram.com/alicejohnson",
    facebook: "https://www.facebook.com/alicejohnson",
  },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-text mb-4">About Us</h1>
        <p className="text-lg text-text">
          We are a leading import-export service provider with a commitment to
          global trade excellence. Our experienced team ensures smooth,
          efficient, and reliable transactions between countries.
        </p>
      </div>
      <hr />
      {/* Company Overview */}
      <section className="mb-16 mt-4">
        <h2 className="text-3xl font-semibold text-text mb-6">Our Story</h2>
        <p className="text-lg text-text leading-relaxed mb-8">
          Founded in [Year], we have established ourselves as a trusted partner
          for businesses looking to expand their reach globally. Our goal is to
          simplify the complexities of international trade and provide solutions
          that bridge geographical boundaries. From sourcing quality products to
          ensuring seamless shipping and handling, we are dedicated to
          delivering outstanding service.
        </p>
        <img
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          alt="Company overview"
          className="w-fit h-[700px] mx-auto rounded-lg shadow-lg"
        />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembersData.map((member) => (
          <TeamMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
