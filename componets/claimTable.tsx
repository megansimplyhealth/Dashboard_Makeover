import 'tailwindcss/tailwind.css'
import { CloseOutlined, DoneOutlined, CachedOutlined } from '@material-ui/icons';
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

  type ClaimTableProps = {
    claims: claimPropsType[];
  };

  type statusType = {
    status: string,
    backgroundColour: string,
    textColour: string,
    icon: JSX.Element
  };

  const statusList: statusType[] = [
    {
        status: 'Paid',
        backgroundColour: 'secondary-green-20',
        textColour: 'secondary-green',
        icon: <DoneOutlined/>
    }, 
    {
        status: 'Declined',
        backgroundColour: 'error-red-20',
        textColour: 'error-red',
        icon: <CloseOutlined/>
    },
    {
        status: 'Pending',
        backgroundColour: 'alert-yellow-40',
        textColour: 'alert-yellow',
        icon: <CachedOutlined/>
    },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    const statusObj = statusList.find((s) => s.status === status);
  
    if (!statusObj) {
      return null;
    }
  
    return (
      <span
        className={`inline-flex items-center px-2 py-1 text-xs font-semibold leading-5 rounded-full`} style={{backgroundColor: statusObj.backgroundColour, color: statusObj.textColour}}>
        <span className="text-xs">{statusObj.icon}</span>
        <span className="ml-1 text-sm">{statusObj.status}</span>
      </span>
    );
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
                className="px-6 py-3 text-left text-base text-black font-bold tracking-wider w-1/6"
              >
                Claim Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base text-black font-bold tracking-wider w-1/6"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base text-black font-bold tracking-wider w-2/6"
              >
                Patient Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base text-black font-bold tracking-wider w-1/6"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-base text-black font-bold tracking-wider w-1/6"
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
                    <StatusBadge status={claim.status || ""} />
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