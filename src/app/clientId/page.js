export default function Page()
{
    const patientData = {
        name: 'Alice Smith',
        age: 55,
        medicalCondition: 'Cardiac patient',
        avatarUrl: 'https://placekitten.com/100/100', // Replace with the actual image URL
        reports: [
          { date: '2024-01-29', diagnosis: 'Cardiac Arrest', prescription: 'Aspirin, Beta-blockers' },
          { date: '2024-02-15', diagnosis: 'High Blood Pressure', prescription: 'ACE Inhibitors' },
          // Add more reports as needed
        ],
        history: [
          { date: '2023-12-10', event: 'Admitted to Hospital', details: 'Emergency admission for chest pain' },
          { date: '2024-01-05', event: 'Follow-up Appointment', details: 'Discussing treatment plan' },
          // Add more history entries as needed
        ],
      };
    
      return (
        <div className="container mx-auto mt-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-4">
              <img src={patientData.avatarUrl} alt="Patient Avatar" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <div className="font-bold text-lg">{patientData.name}</div>
                <div className="text-gray-600">{patientData.medicalCondition}</div>
              </div>
            </div>
    
            <div className="bg-white p-6 border rounded-md shadow-md">
              <div className="mb-4">
                <div className="font-bold text-lg">Patient Reports</div>
                {patientData.reports.map((report, index) => (
                  <div key={index} className="border-t mt-2 pt-2">
                    <div className="text-gray-700">Date: {report.date}</div>
                    <div className="font-semibold">Diagnosis: {report.diagnosis}</div>
                    <div>Prescription: {report.prescription}</div>
                  </div>
                ))}
              </div>
    
              <div>
                <div className="font-bold text-lg mt-4">Patient History</div>
                {patientData.history.map((historyEntry, index) => (
                  <div key={index} className="border-t mt-2 pt-2">
                    <div className="text-gray-700">Date: {historyEntry.date}</div>
                    <div className="font-semibold">Event: {historyEntry.event}</div>
                    <div>Details: {historyEntry.details}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
}