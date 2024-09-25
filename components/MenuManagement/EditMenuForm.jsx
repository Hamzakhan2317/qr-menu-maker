"use client";
import { useEffect, useState } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useEditMenuMutation } from "@/redux/services/api/menuApis";

import InputField from "../ui/InputField";
import ButtonComp from "../ui/button";

const EditMenuForm = ({
    data,
    refetchMenus,
    setMenuEditData,
    setIsDrawerOpen,
}) => {
    const [editMenu] = useEditMenuMutation();

    const handelEditMenu = async (values) => {
        try {
            const resp = await editMenu({
                ...values,
                restaurantId: data?.restaurant,
                menuId: data?._id,
            });
            if (resp) {
                setMenuEditData(null);
                formik.resetForm();
                refetchMenus();
                setIsDrawerOpen(false);
            }
        } catch (error) {
            toast.success( "Menu Updated successfully");
            setMenuEditData(null);
            formik.resetForm();
            console.log("error>>>>>", error);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: data?.name ?? "",
            description: data?.description ?? "",  // Fixed typo here
            note: data?.note ?? "",
        },
        onSubmit: async (values) => {
            handelEditMenu(values);
        },
        enableReinitialize: true, // Enable this to allow form reinitialization when data changes
    });

    // Make sure form is reset when data changes
    useEffect(() => {
        if (data) {
            formik.resetForm({
                values: {
                    name: data?.name ?? "",
                    description: data?.description ?? "",
                    note: data?.note ?? "",
                },
            });
        }
    }, [data]); // Update form values when `data` changes

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "10px",
                    flexDirection: "row-reverse",
                    justifyContent: "flex-end",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <h3>Edit Menu</h3>
                <IconButton
                    color="#000"
                    onClick={() => {
                        formik.resetForm();
                        setIsDrawerOpen(false);
                        setMenuEditData(null);
                    }}
                    marginRight="5px"
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <Box
                sx={{ padding: "10px" }}
                component="form"
                onSubmit={formik.handleSubmit}
            >
                <Typography color={"#8338ec"}>Overview</Typography>
                <Grid container spacing={2}>
                    <InputField
                        cols={12}
                        label={"Name"}
                        required
                        Placeholder={"name"}
                        customHeight="40px"
                        name="name"
                        formik={formik}
                    />
                    <InputField
                        cols={12}
                        label={"Description"}
                        multiline={true}
                        rows={2}
                        Placeholder={"description"}
                        name="description"
                        formik={formik}
                    />
                    <InputField
                        cols={12}
                        label={"Note"}
                        multiline={true}
                        rows={2}
                        Placeholder={"note"}
                        name="note"
                        formik={formik}
                    />
                </Grid>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        position: "sticky",
                        bottom: "0",
                        backgroundColor: "#fff",
                        height: "60px",
                        borderTop: "1px solid #E5E5E5",
                    }}
                >
                    <Box>
                        <ButtonComp
                            text="Cancel"
                            padding="4px 20px"
                            marginRight="10px"
                            variant="transparent"
                            hoverBorder="1px solid #8338EC"
                            border="1px solid #d9d9d9"
                            onClick={() => {
                                formik.resetForm();
                                setIsDrawerOpen(false);
                                setMenuEditData(null);
                            }}
                        />
                        <ButtonComp
                            text="Save"
                            padding="4px 20px"
                            variant="transparent"
                            hoverBorder="1px solid #8338EC"
                            border="1px solid #d9d9d9"
                            onClick={formik.handleSubmit}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default EditMenuForm;
