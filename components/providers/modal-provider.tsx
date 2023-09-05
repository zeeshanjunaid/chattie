"use client";

import React, { useEffect, useState } from "react";

import CreateChannelModal from "../modals/create-channel-modal";
import CreateServerModal from "../modals/create-server-modal";
import DeleteChannelModal from "../modals/delete-channel-modal";
import DeleteMessageModal from "../modals/delete-message-modal";
import DeleteServerModal from "../modals/delete-server-modal";
import EditChannelModal from "../modals/edit-channel-modal";
import EditServerModal from "../modals/edit-server-modal";
import InviteModal from "../modals/invite-modal";
import LeaveServerModal from "../modals/leave-server-modal";
import MembersModal from "../modals/members-modal";
import MessageFileModal from "../modals/message-file-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <EditServerModal />
      <EditChannelModal />
      <MembersModal />
      <InviteModal />
      <CreateChannelModal />
      <DeleteChannelModal />
      <DeleteMessageModal />
      <MessageFileModal />
    </>
  );
};

export default ModalProvider;
