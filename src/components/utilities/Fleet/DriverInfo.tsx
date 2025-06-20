import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import driver1 from "@/FolderToDelete/driver1.jpg";
import { Label } from "@/components/ui/label";
import driversl from "@/FolderToDelete/driversl.jpg";
import { ComboboxForm, type ComboData } from "../ComboboxForm";

// --- Types ---
type DriverStatus = "assigned" | "unassigned" | "disabled";
type TripStatus = "ongoing" | "completed" | "breakdown";

interface Trip {
  id: string;
  date: string;
  origin: string;
  destination: string;
  amount: string;
  status: TripStatus;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  email?: string;
  status: DriverStatus;
  tripHistory: Trip[];
}

export const DriverInfo = ({
  driver,
  availableVehicle,
}: {
  driver: Driver;
  availableVehicle: ComboData[];
}) => {
  const [status, setStatus] = useState<DriverStatus>(driver.status);

  const handleAssign = () => {
    if (status === "assigned") {
      setStatus("unassigned");
    } else {
      setStatus("assigned");
    }
  };

  const handleDisable = () => {
    setStatus("disabled");
    // Additional logic like API call
  };

  // const statusColor = {
  //   assigned: "bg-green-100 text-green-800",
  //   unassigned: "bg-yellow-100 text-yellow-800",
  //   disabled: "bg-red-100 text-red-800",
  // };

  return (
    <div className="bg-secondary max-w-3xl mx-auto p-6 rounded-lg">
      <div className="md:flex space-y-3 md:space-y-0 md:space-x-3">
        <div className="border border-line-1 bg-background rounded flex-1 text-center py-6">
          <h3 className="text-xl font-bold">{driver.name}</h3>
          <p className="text-red-500 text-sm">{status}</p>
          <Image
            source={driver1}
            alt=""
            className="mx-auto mt-3 w-50 h-50 border-8 border-accent rounded-full object-cover"
          />
        </div>
        <div className="border border-line-1 bg-background rounded flex-2 py-6 px-4">
          <h3>Bio & other details</h3>
          <div className="md:flex">
            <div className="flex-1">
              <div className="my-3">
                <Label>Number</Label>
                <p className="text-muted-foreground text-sm">{driver.phone}</p>
              </div>

              <div className="my-3">
                <Label>Cuzoo mail</Label>
                <p className="text-muted-foreground text-sm">{driver.email}</p>
              </div>

              <div className="my-3">
                <Label>Date of birth</Label>
                <p className="text-muted-foreground text-sm">21/6/1993</p>
              </div>

              <div className="my-3">
                <Label>Emergency Contact</Label>
                <p className="text-muted-foreground text-sm">+234808576556</p>
              </div>

              <div className="my-3">
                <Label>Vehicle</Label>
                <p className="text-muted-foreground text-sm">Unassign</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="my-3">
                <Label>Home Address</Label>
                <p className="text-muted-foreground text-sm">
                  No. 64, Surulere Street, Lagos state
                </p>
              </div>
              <div className="my-3">
                <Label>Gender</Label>
                <p className="text-muted-foreground text-sm">Male</p>
              </div>

              <div className="my-3">
                <Label>Drivers Licence</Label>
                <Image source={driversl} className="w-4/5 mt-1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 flex justify-end bg-background border border-line-1 p-3 rounded">
        <div>
          <div className="my-2">
            {status !== "assigned" ? (
              <div>
                <h3>Assign Vehicle</h3>
                <ComboboxForm info={availableVehicle} />
              </div>
            ) : (
              <Button onClick={handleAssign}>Unassign from Vehicle</Button>
            )}
          </div>

          <div className="my-2 flex space-x-3">
            <Link
              to="edit"
              className="text-primary flex justify-center items-center border rounded-md px-2 hover:text-accent"
            >
              Edit Driver
            </Link>

            {status !== "disabled" && (
              <Button onClick={handleDisable}>Disable Driver</Button>
            )}
          </div>
        </div>

        {/* <div>
          <h3 className="text-lg font-medium mt-6 mb-2">Trip History</h3>
          {driver.tripHistory.length === 0 ? (
            <p className="text-sm text-muted-foreground">No trips yet.</p>
          ) : (
            <ul className="space-y-2">
              {driver.tripHistory.map((trip) => (
                <li
                  key={trip.id}
                  className="border rounded p-3 text-sm items-center flex justify-between"
                >
                  <div>
                    <div className="font-semibold">{trip.date}</div>
                    <div className="text-muted-foreground">
                      {trip.origin} → {trip.destination}
                    </div>
                  </div>
                  <div>₦ {trip.amount}</div>
                  <div>{trip.status}</div>
                </li>
              ))}
            </ul>
          )}
        </div> */}
      </div>
    </div>
  );
};
