import React, {useEffect} from 'react';
import {TextField, DialogContent, DialogTitle, Icon, IconButton, Typography, Toolbar, AppBar, Avatar, InputAdornment, Tooltip, List} from '@material-ui/core';
import {FuseChipSelect} from '@fuse';
import {useDebounce, useForm} from '@fuse/hooks';
import {bindActionCreators} from 'redux';
import _ from '@lodash';
import moment from 'moment';
import {connect} from 'react-redux';
import * as Actions from 'app/main/apps/scrumboard/store/actions/index';
import LabelModel from 'app/main/apps/scrumboard/model/LabelModel';
import CardAttachment from './attachment/CardAttachment';
import DueMenu from './toolbar/DueMenu';
import LabelsMenu from './toolbar/LabelsMenu';
import MembersMenu from './toolbar/MembersMenu';
import CheckListMenu from './toolbar/CheckListMenu';
import OptionsMenu from './toolbar/OptionsMenu';
import CardChecklist from './checklist/CardChecklist';
import CardActivity from './activity/CardActivity';
import CardComment from './comment/CardComment';

function BoardCardForm(props)
{
    const {form: cardForm, handleChange, setForm, setInForm} = useForm(props.card);
    const updateCard = useDebounce((boardId, card) => {
        props.updateCard(boardId, card);
    }, 600);
    const dueDate = cardForm && cardForm.due ? moment(cardForm.due).format(moment.HTML5_FMT.DATE) : "";

    useEffect(() => {
        if ( !_.isEqual(props.card, cardForm) )
        {
            updateCard(props.board.id, cardForm);
        }
    }, [cardForm]);

    function removeDue()
    {
        setInForm('due', null);
    }

    function toggleLabel(labelId)
    {
        setInForm('idLabels', _.xor(cardForm.idLabels, [labelId]));
    }

    function toggleMember(memberId)
    {
        setInForm('idMembers', _.xor(cardForm.idMembers, [memberId]));
    }

    function addCheckList(newList)
    {
        setInForm('checklists', [...cardForm.checklists, newList]);
    }

    function chipChange(name, value)
    {
        setInForm(name, value.map(item => item.value));
    }

    function addNewChip(name, value)
    {
        setInForm(name, [...cardForm[name], value]);
    }

    function makeCover(attachmentId)
    {
        setInForm('idAttachmentCover', attachmentId);
    }

    function removeCover()
    {
        setInForm('idAttachmentCover', '');
    }

    function removeAttachment(attachmentId)
    {
        setForm(
            {
                ...cardForm,
                attachments      : _.reject(cardForm.attachments, {id: attachmentId}),
                idAttachmentCover: cardForm.idAttachmentCover === attachmentId ? '' : cardForm.idAttachmentCover
            }
        );
    }

    function checkListChange(item)
    {
        const index = cardForm.checklists.findIndex((x) => x.id === item.id);
        setInForm(`checklists[${index}]`, item);
    }

    function removeCheckList(id)
    {
        setInForm('checklists', _.reject(cardForm.checklists, {id: id}));
    }

    function commentAdd(comment)
    {
        return setInForm('activities', [comment, ...cardForm.activities]);
    }

    return (
        <>
            <DialogTitle component="div" className="p-0">
                <AppBar position="static" elevation={1}>
                    <Toolbar className="flex w-full overflow-x-auto px-8 sm:px-16">
                        <div className="flex flex-1">

                            <DueMenu
                                onDueChange={handleChange}
                                onRemoveDue={removeDue}
                                due={dueDate}
                            />

                            <LabelsMenu
                                onToggleLabel={toggleLabel}
                                labels={props.board.labels}
                                idLabels={cardForm.idLabels}
                            />

                            <MembersMenu
                                onToggleMember={toggleMember}
                                members={props.board.members}
                                idMembers={cardForm.idMembers}
                            />

                            <IconButton color="inherit">
                                <Icon>attachment</Icon>
                            </IconButton>

                            <CheckListMenu
                                onAddCheckList={addCheckList}
                            />

                            <OptionsMenu
                                onRemoveCard={() => props.removeCard(props.board.id, cardForm.id)}
                            />

                        </div>
                        <IconButton color="inherit" onClick={props.closeCardDialog}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </DialogTitle>

            <DialogContent className="p-16 sm:p-24">
                <div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center mb-24">
                    <div className="mb-16 sm:mb-0 flex items-center">
                        <Typography>{props.board.name}</Typography>
                        <Icon className="text-20" color="inherit">chevron_right</Icon>
                        <Typography>{props.list && props.list.name}</Typography>
                    </div>

                    {cardForm.due && (
                        <TextField
                            label="Due date"
                            type="date"
                            name="due"
                            value={dueDate}
                            onChange={handleChange}
                            placeholder=" Choose a due date"
                            className="w-full sm:w-auto"
                            InputLabelProps={{
                                shrink: true
                            }}
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Icon color="action">today</Icon>
                                    </InputAdornment>
                                )
                            }}
                        />
                    )}
                </div>

                <div className="flex items-center mb-24">
                    <TextField
                        label="Title"
                        type="text"
                        name="name"
                        value={cardForm.name}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {cardForm.subscribed && (
                                        <Icon className="text-20" color="action">remove_red_eye</Icon>
                                    )}
                                </InputAdornment>
                            )
                        }}
                    />
                </div>

                <div className="w-full mb-24">
                    <TextField
                        label="Description"
                        name="description"
                        multiline
                        rows="4"
                        value={cardForm.description}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                </div>

                <div className="flex flex-col sm:flex-row">
                    {cardForm.idLabels.length > 0 && (
                        <div className="flex-1 mb-24">
                            <div className="flex items-center mt-16 mb-12">
                                <Icon className="text-20 mr-8" color="inherit">label</Icon>
                                <Typography className="font-600 text-16">Labels</Typography>
                            </div>
                            <FuseChipSelect
                                className={cardForm.idMembers.length > 0 && 'sm:mr-8'}
                                value={
                                    cardForm.idLabels.map(labelId => ({
                                        value: labelId,
                                        label: _.find(props.board.labels, {id: labelId}).name,
                                        class: _.find(props.board.labels, {id: labelId}).class
                                    }))
                                }
                                onChange={(value) => chipChange('idLabels', value)}
                                placeholder="Select multiple Labels"
                                isMulti
                                textFieldProps={{
                                    variant: "outlined"
                                }}
                                options={props.board.labels.map((label) => (
                                    {
                                        value: label.id,
                                        label: label.name,
                                        class: label.class
                                    }
                                ))}
                                onCreateOption={(name) => {
                                    // Create New Label
                                    const newLabel = new LabelModel({name});

                                    // Ad new Label to board(redux store and server)
                                    props.addLabel(newLabel);

                                    // Trigger handle chip change
                                    addNewChip('idLabels', newLabel.id);

                                    return newLabel.id;
                                }}
                            />
                        </div>
                    )}

                    {cardForm.idMembers.length > 0 && (
                        <div className="flex-1 mb-24">
                            <div className="flex items-center mt-16 mb-12">
                                <Icon className="text-20 mr-8" color="inherit">supervisor_account</Icon>
                                <Typography className="font-600 text-16">Members</Typography>
                            </div>
                            <FuseChipSelect
                                className={cardForm.idLabels.length > 0 && 'sm:ml-8'}
                                value={
                                    cardForm.idMembers.map(memberId => {
                                        const member = _.find(props.board.members, {id: memberId});
                                        return {
                                            value: member.id,
                                            label: (<Tooltip title={member.name}><Avatar className="-ml-12 w-32 h-32" src={member.avatar}/></Tooltip>)
                                        }
                                    })
                                }
                                onChange={(value) => chipChange('idMembers', value)}
                                placeholder="Select multiple Members"
                                isMulti
                                textFieldProps={{
                                    variant: "outlined"
                                }}
                                options={props.board.members.map((member) => (
                                    {
                                        value: member.id,
                                        label: (<span className="flex items-center"><Avatar className="w-32 h-32 mr-8" src={member.avatar}/>{member.name}</span>)
                                    }
                                ))}
                                variant="fixed"
                            />
                        </div>
                    )}
                </div>

                {cardForm.attachments.length > 0 && (
                    <div className="mb-24">
                        <div className="flex items-center mt-16 mb-12">
                            <Icon className="text-20 mr-8" color="inherit">attachment</Icon>
                            <Typography className="font-600 text-16">Attachments</Typography>
                        </div>
                        <div className="flex flex-col sm:flex-row flex-wrap">
                            {cardForm.attachments.map(item => (
                                    <CardAttachment
                                        item={item}
                                        card={cardForm}
                                        makeCover={makeCover}
                                        removeCover={removeCover}
                                        removeAttachment={removeAttachment}
                                        key={item.id}
                                    />
                                )
                            )}
                        </div>
                    </div>
                )}

                {cardForm.checklists.map(checklist => (
                    <CardChecklist
                        key={checklist.id}
                        checklist={checklist}
                        onCheckListChange={checkListChange}
                        onRemoveCheckList={() => removeCheckList(checklist.id)}
                    />
                ))}

                <div className="mb-24">
                    <div className="flex items-center mt-16 mb-12">
                        <Icon className="text-20 mr-8" color="inherit">comment</Icon>
                        <Typography className="font-600 text-16">Comment</Typography>
                    </div>
                    <div>
                        <CardComment
                            members={props.board.members}
                            onCommentAdd={commentAdd}
                        />
                    </div>
                </div>

                {cardForm.activities.length > 0 && (
                    <div className="mb-24">
                        <div className="flex items-center mt-16">
                            <Icon className="text-20 mr-8" color="inherit">list</Icon>
                            <Typography className="font-600 text-16">Activity</Typography>
                        </div>
                        <List className="">
                            {cardForm.activities.map(item => (
                                    <CardActivity
                                        item={item}
                                        key={item.id}
                                        members={props.board.members}
                                    />
                                )
                            )}
                        </List>
                    </div>
                )}
            </DialogContent>
        </>
    );
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closeCardDialog: Actions.closeCardDialog,
        updateCard     : Actions.updateCard,
        removeCard     : Actions.removeCard,
        addLabel       : Actions.addLabel,
    }, dispatch);
}

function mapStateToProps({scrumboardApp})
{
    return {
        card : scrumboardApp.card,
        board: scrumboardApp.board
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardCardForm);
