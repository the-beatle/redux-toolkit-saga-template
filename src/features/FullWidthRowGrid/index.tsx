import React, {useMemo, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './style.css';
import {CellClickedEvent, ColDef,} from 'ag-grid-community';
import Grid from "../grid/Grid";
import {Modal} from '@material-ui/core';

// Register  required feature modules with the Grid
interface IRequests {
    id: string;
    user: string;
    failedItems: Array<string>;
    pendingItems: Array<string>;
    successItems: Array<string>;
    businessUnit: string;
    country: string;
    timestamp: string;
    isSelected?: boolean;
}

const requestColumns: ColDef[] = [
    {headerName: 'ID', field: 'id', sortable: true, filter: true},
    {headerName: 'Request Submitted', field: 'timestamp', sortable: true, filter: true},
    {headerName: 'User', field: 'user', sortable: true, filter: true},
    {headerName: 'Failed Items', field: 'failedItems', sortable: true, filter: true},
    {headerName: 'Pending Items', field: 'pendingItems', sortable: true, filter: true},
    {headerName: 'Success Items', field: 'successItems', sortable: true, filter: true},
    {headerName: 'Business Unit', field: 'businessUnit', sortable: true, filter: true},
    {headerName: 'Country', field: 'country', sortable: true, filter: true},
]
const requestRows = [

    {
        id: "1",
        user: "John",
        failedItems: ["1", "2"],
        pendingItems: ["3", "4"],
        successItems: ["5", "6"],
        businessUnit: "BU1",
        country: "UK",
        timestamp: "2021-01-01",
        isSelected: false
    },
    {
        id: "2",
        user: "Mario",
        failedItems: ["1", "2"],
        pendingItems: ["3", "4"],
        successItems: ["5", "6"],
        businessUnit: "BU1",
        country: "UK",
        timestamp: "2021-01-01",
        isSelected: false
    },
]


const GridExample = () => {
    const containerStyle = useMemo(() => ({width: '100%', height: '100%'}), []);
    const gridStyle = useMemo(() => ({height: '100vh', width: '100%'}), []);
    const [rowData, setRowData] = useState<IRequests[]>(requestRows);
    const [columnDefs, setColumnDefs] = useState<ColDef[]>(requestColumns);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const defaultColDef = useMemo<ColDef>(() => {
        return {
            flex: 1,
            sortable: true,
            resizable: true,
            filter: true,
        };
    }, []);


    const onCellClicked = (event: CellClickedEvent) => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine">
                <Modal open={isModalOpen}>
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button className="close" onClick={closeModal}>
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <Grid/>
                            </div>
                        </div>
                    </div>
                </Modal>
                <AgGridReact<IRequests>
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    onCellClicked={onCellClicked}
                ></AgGridReact>
            </div>
        </div>
    );
};

export default GridExample;

