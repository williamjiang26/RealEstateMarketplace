"use client";
import { useGetAuthUserQuery } from "@/state/api";
import { useParams } from "../../../../../node_modules/next/navigation";
import ContactWidget from "./ContactWidget";
import ImagePreviews from "./ImagePreviews";
import PropertyDetails from "./PropertyDetails";
import PropertyLocation from "./PropertyLocation";
import PropertyOverview from "./PropertyOverview";

const SingleListing = () => {
  const { id } = useParams();
  const propertyId = Number(id);
  const { data: authUser } = useGetAuthUserQuery();

  return (
    <div>
      <ImagePreviews
        images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
      />
      <div className="flex flex-col md:flex-row justify-center gap-10 mx-10 md:w-2/3 md:mx-auto mt-16 mb-8">
        <div className="order-2 md:order-1">
          <PropertyOverview propertyId={propertyId} />
          <PropertyDetails propertyId={propertyId} />
          <PropertyLocation propertyId={propertyId} />
        </div>
        <div>
          <ContactWidget onOpenModal={ () => setIsModalOpen(true)} />
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
