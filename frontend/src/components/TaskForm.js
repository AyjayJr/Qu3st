import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams, Redirect } from "react-router-dom";
import axios from 'axios';

import ToDoList from '/TaskList.js';

import bp from "./Path.js";

function readLists(id) {
    return new Promise((resolve, reject) => {

        const obj = {
            token: localStorage.getItem("token")
        };

        const config = {
            method: "post",
            url: bp.buildPath(`listQuest/${id}`),
            headers: {
                "Content-Type": "application/json"
            },
            data: obj
        };
        axios(config)
            .then(function (response) {
                const res = response.data;
                if (res.error) {
                    // setMessage('Error adding list');
                    // addRes.current.style.display = "inline-block";
                    console.error(res.errorS);
                    return;
                }
                
                let param = null;
                if (res.length > 0)
                    param = {
                        id: res[0].id,
                        key: res[0].id,
                        title: res[0].title,
                        body: res[0].list || []
                    };

                resolve(param);
            })
            .catch(function (error) {
                if (error.response) {
                    // setMessage(error.response.data?.error);
                    // .current.style.display = "inline-block";
                    reject(error.response.data);
                    return;
                }
            });
    });
}

// Force Update Page when called
function useForceUpdate() {
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

function ListPage() {
    
    const { list_id } = useParams();

    const forceUpdate = useForceUpdate();
    const [list, setList] = useState({});
    const [redirect, setRedirect] = useState(<></>);

    useEffect(() => {
        readLists(list_id)
        .then(list => {
            if (!list)
                setRedirect(<Redirect to="/canvas"/>);
            setList(list);
        })
        .catch(_ => {
            // return setRedirect(<Redirect to="/canvas"/>);
        });
    }, [list_id]);
    // readLists().then(setLists);

    const listView = (
        <ToDoList
            name={list.title}
            id={list.id}
            key={list.key}
            tasks={list.body}
            singleView={true}
            editList={editList}
            deleteList={deleteList}
        />
    );

    function editList(id, title, body) {
        const config = {
            method: "post",
            url: bp.buildPath(`/updateQuest/${id}`),
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                token: localStorage.getItem("token"),
                id: id,
                title: title,
                list: body
            }
        };

        axios(config)
            .then(function (response) {
                const res = response.data;
                if (res.error) {
                    // setMessage('Error adding list');
                    // addRes.current.style.display = "inline-block";
                    console.error(res.error);
                    return;
                }
                list.title = title;
                list.body = body;
                setList(list);
                forceUpdate();

                })
            .catch(function (error) {
                if (error.response) {
                    // setMessage(error.response.data?.error);
                    // .current.style.display = "inline-block";
                    console.error(error.response);
                }
            });
    }

    function deleteList() {
        const config = {
            method: "post",
            url: bp.buildPath(`/deleteQuest`),
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                token: localStorage.getItem("token"),
                id: list_id
            }
        };

        axios(config)
            .then(function (response) {
                const res = response.data;
                if (res.error) {
                    // setMessage('Error adding list');
                    // addRes.current.style.display = "inline-block";
                    console.error(res.error);
                    return;
                }

                setRedirect(<Redirect to="/canvas"/>);
            })
            .catch(function (error) {
                if (error.response) {
                    // setMessage(error.response.data?.error);
                    // .current.style.display = "inline-block";
                    console.error(error.response);
                }
            });
    }

    return (
        <div id="canvas" className="app">
            <div className="canvasBlock">
            </div>
            <Container className="cardContainer singleContainer" >
                {listView}
                {redirect}
            </Container>
        </div>
    );
}

export default ListPage;