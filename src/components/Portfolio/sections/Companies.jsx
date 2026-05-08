const Companies = () => {
  const companies = [
    { id: "DP", name: "Defensoria Pública do Estado do Pará" },
    { id: "FS", name: "Freelancer" },
    { id: "FR", name: "Frexco Alimentos S.A" },
    { id: "CS", name: "CS-Consoft Consultoria e Sistemas Ltda" },
    { id: "SP", name: "Secretaria Municipal de Segurança Pública do Pará" },
  ];

  return (
    <section className="companies">
      <div className="companies-track">
        {[...companies, ...companies, ...companies].map((company, index) => (
          <div key={index} className="company-item-wrapper">
            <div className="company-item">
              <div className="company-logo">{company.id}</div>
              {company.name}
            </div>
            <div className="divider-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
