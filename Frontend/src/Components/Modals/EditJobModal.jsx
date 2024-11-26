import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Select,
  ModalCloseButton,
  Button,
  GridItem,
  Grid,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import { getSingleJobAction, jobEditAction, resetSingleJobAction } from "../../Redux/Actions/jobAction";

let initState = {
  companyName: "",
  position: "",
  contract: "",
  location: "",
};
const EditJobModal = ({ isOpen, onClose, onOpen, id, getNewData }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [formData, setFormData] = useState(initState);
  const { jobData, getSingleJobStauts } = useSelector((state) => state.SingleJob);

  const { companyName, position, location, contract } = formData;
  function Toaster(title, message, status) {
    return toast({
      title: title,
      position: "top",
      description: message,
      status: status,
      duration: 1200,
      isClosable: true,
    });
  }

  useEffect(() => {
    if (isOpen && !getSingleJobStauts) {
      console.log("isOpen:", isOpen);
      dispatch(getSingleJobAction(id));
    } else if (!isOpen) {
      dispatch(resetSingleJobAction());
      setFormData(initState);
    }
    if (getSingleJobStauts) {
      setFormData(jobData.SingleJob);
    }
  }, [isOpen, getSingleJobStauts]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const hanldeClick = () => {
    dispatch(jobEditAction(formData,Toaster));
    setFormData(initState);
    onClose();
  };

  return (
    <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody p={6} rounded={4} bg={"white"}>
          <Grid mt={2} w="80%" m={"auto"} templateColumns="repeat(2, 1fr)" gap={2}>
            {/* 1 Company Name */}
            <GridItem colSpan={{ base: 2, md: 2 }}>
              <FormControl isRequired>
                <FormLabel>Company Name</FormLabel>
                <Input placeholder="Name" type="text" name="companyName" value={companyName} onChange={handleChange} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 2 }}>
              {/* Position */}
              <FormControl isRequired>
                <FormLabel>Position</FormLabel>
                <Select placeholder="Select Position" name="position" value={position} onChange={handleChange}>
                  <option value="Carpenter">Carpenter</option>
                  <option value="Mason">Mason</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Welder">Welder</option>
                  <option value="Painter">Painter</option>
                  <option value="Laborer">Laborer</option>
                  <option value="Helper">Helper</option>
                  <option value="Steel Fixer">Steel Fixer</option>
                  <option value="Tile Fitter">Tile Fitter</option>
                  <option value="Roofer">Roofer</option>
                  <option value="Forklift Operator">Forklift Operator</option>
                  <option value="Scaffolder">Scaffolder</option>
                  <option value="Construction Supervisor">Construction Supervisor</option>
                  <option value="Heavy Machine Operator">Heavy Machine Operator</option>
                  <option value="Gardener">Gardener</option>
                  <option value="Domestic Helper">Domestic Helper</option>
                  <option value="Cook">Cook</option>
                  <option value="Cleaner">Cleaner</option>
                  <option value="Driver">Driver</option>
                  <option value="Tailor">Tailor</option>
                  <option value="Security Guard">Security Guard</option>
                  <option value="Housekeeper">Housekeeper</option>
                  <option value="Barber">Barber</option>
                  <option value="Fabricator">Fabricator</option>
                  <option value="Mechanic">Mechanic</option>
                  <option value="Agricultural Worker">Agricultural Worker</option>
                  <option value="Warehouse Worker">Warehouse Worker</option>
                  <option value="Loading/Unloading Worker">Loading/Unloading Worker</option>
                  <option value="Bricklayer">Bricklayer</option>
                  <option value="Pest Control Worker">Pest Control Worker</option>
                  <option value="Dairy Worker">Dairy Worker</option>
                  <option value="Fishery Worker">Fishery Worker</option>
                  <option value="Animal Caretaker">Animal Caretaker</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={{ base: 2, md: 2 }}>
              <FormControl isRequired>
                <FormLabel>Contract</FormLabel>
                <Select placeholder="Select Contract" name="contract" value={contract} onChange={handleChange}>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={{ base: 2, md: 2 }}>
              <FormControl isRequired>
                <FormLabel>Location</FormLabel>
                <Input placeholder="Location" type="text" name="location" value={location} onChange={handleChange} />
              </FormControl>
            </GridItem>

            {/* 8 Buttom */}
            <GridItem colSpan={2}>
              <FormControl isRequired>
                <Button colorScheme="teal" onClick={hanldeClick} w={"full"}>
                  Edit Job
                </Button>
              </FormControl>
            </GridItem>
          </Grid>
        </ModalBody>
        {/* <ModalFooter bg={"#3D1766"}>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};

export default EditJobModal;
