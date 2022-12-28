const updateForm = ( doc ) =>
{
  let updateAppointmentsSection = document.querySelector( '.updateAppointmentsSection' )
  let updateForm = /*html*/`
                        <div class="updateFormWrapper grid grid-cols-2 gap-y-3 gap-x-10 mt-10">

                            <div class="nameUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold"> Name </span>
                            <input type="text" name="nameUpdateCell" id="nameUpdateCell" disabled value="${ doc.data().aptName
    }" class="border-2 border-gray-200 bg-gray-300 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl" />
                            </div>

                            <div class="emailUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold"> Email </span>
                            <input type="text" name="emailUpdateCell" id="emailUpdateCell" disabled value="${ doc.data().aptEmail
    }" class="border-2 border-gray-200 bg-gray-300 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl">
                            </div>

                            <div class="dayUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold">Day</span>
                            <select name="aptDay" id="aptDay"
                            class="dayUpdateHolder border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-3 aptDay lg:drop-shadow-none drop-shadow-2xl text-sm">
                                <option value="${ doc.data().aptDay }" class="font-semibold">
                                ${ doc.data().aptDay }
                                </option>
                                <option value="Monday" class="font-semibold">
                                Monday
                                </option>
                                <option value="Tuesday" class="font-semibold">
                                Tuesday
                                </option>
                                <option value="Wednesday" class="font-semibold">
                                Wednesday
                                </option>
                                <option value="Thursday" class="font-semibold">
                                Thursday
                                </option>
                                <option value="Friday" class="font-semibold">
                                Friday
                                </option>
                                <option value="Saturday" class="font-semibold">
                                Saturday
                                </option>
                                <option value="Sunday" class="font-semibold">
                                Sunday
                                </option>
                            </select>
                            </div>

                            <div class="timeSlotUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold"> Time Slot </span>
                            <select name="aptTimeSlot" id="aptTimeSlot"
                                class="timeSlotUpdateHolder border-gray-200 border-2 rounded-lg w-full placeholder:text-blue-900 font-medium lg:placeholder:text-sm py-3 aptTimeSlot lg:drop-shadow-none drop-shadow-2xl text-sm">
                                <option value="${ doc.data().aptTimeSlot
    }" class="font-semibold">
                                ${ doc.data().aptTimeSlot }
                                </option>
                                <option value="09:00 - 10:00" class="font-semibold">
                                09:00 - 10:00
                                </option>
                                <option value="10:00 - 11:00" class="font-semibold">
                                10:00 - 11:00
                                </option>
                                <option value="11:00 - 12:00" class="font-semibold">
                                11:00 - 12:00
                                </option>
                                <option value="12:00 - 13:00" class="font-semibold">
                                12:00 - 13:00
                                </option>
                                <option value="13:00 - 14:00" class="font-semibold">
                                13:00 - 14:00
                                </option>
                                <option value="14:00 - 15:00" class="font-semibold">
                                14:00 - 15:00
                                </option>
                                <option value="15:00 - 16:00" class="font-semibold">
                                15:00 - 16:00
                                </option>
                                <option value="16:00 - 17:00" class="font-semibold">
                                16:00 - 17:00
                                </option>
                                <option value="17:00 - 18:00" class="font-semibold">
                                17:00 - 18:00
                                </option>
                                
                            </select>
                            </div>

                            <div class="occurrenceUpdate">

                            <span class="mb-3 px-1 text-xs font-semibold">Occurrence Type</span>
                            <input type="number" name="occurrenceUpdateCell" id="occurrenceUpdateCell" value="${ doc.data().aptOccurrenceType
    }" class="occurrenceUpdateHolder border-2 border-gray-200 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl">
                            </div>

                            <div class="reasonToUpdate">
                            <span class="mb-3 px-1 text-xs font-semibold">Reason to Update</span>
                            <input type="text" name="occurrenceUpdateCell" id="occurrenceUpdateCell" class="reasonToUpdate border-2 border-gray-200 rounded-lg w-full placeholder:text-blue-900 lg:placeholder:text-sm placeholder:font-medium py-3 lg:drop-shadow-none drop-shadow-2xl">
                            </div>
                            
                        </div>
                        <div class="updateCancelButtons mt-10">
                            <button class="bg-emerald-500 updateButton ml-2 py-3 px-6 text-white text-xs lg:text-md tracking-widest rounded-lg uppercase">Update</button>
                            <button class="bg-rose-500 cancelUpdateButton ml-2 py-3 px-6 text-white text-xs lg:text-md tracking-widest rounded-lg uppercase">Cancel</button>
                        </div>
                        `
  updateAppointmentsSection.innerHTML = updateForm
}
