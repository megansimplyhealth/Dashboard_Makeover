import 'tailwindcss/tailwind.css'
import { CloseOutlined, DoneOutlined } from '@material-ui/icons';
import { useState } from 'react';

type claimPropsType = {
    claimId?: number,
    date?: string,
    patientFirstname?: string,
    patientLastname?: string,
    status?: string,
    amount?: number,
    onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void
  };

  type statusType = {
    status: string,
    backgroundColour: string,
    textColour: string,
    icon: JSX.Element
  };
  type ClaimTableProps = {
    claims: claimPropsType[];
  };
  
  const ClaimTable: React.FC<ClaimTableProps> = (props) => {
    const { claims } = props;

    const [checkedClaims, setCheckedClaims] = useState<{ [key: number]: boolean }>({});
  
    const handleCheckboxChange = (claimId: number | undefined) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (claimId !== undefined) {
        setCheckedClaims({
          ...checkedClaims,
          [claimId]: event.target.checked,
        });
  
        claims.find(claim => claim.claimId === claimId)?.onClick?.(event);
      }
    };
  
    return (
      <div className="relative bg-transparent">
        <table className="min-w-full table-fixed divide-y divide-gray-200 w-full">
          <thead className="bg-white">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Claim Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Patient Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/5"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {claims.map((claim, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={checkedClaims[claim.claimId || 0] || false}
                    onChange={handleCheckboxChange(claim.claimId)}
                  />
                  <span className="ml-2">{claim.claimId}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {claim.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {`${claim.patientFirstname} ${claim.patientLastname}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {claim.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {claim.amount ? `£${claim.amount.toFixed(2)}` : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default ClaimTable;