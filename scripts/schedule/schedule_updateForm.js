const updateForm = ( doc ) =>
{
    let updateAppointmentsSection = document.querySelector( '.updateAppointmentsSection' )
    let defaultDateValue = `${ doc.data().year.at( -1 ) }-${ doc.data().month.at( -1 ) }-${ doc.data().date.at( -1 ) }`
    console.log( typeof ( defaultDateValue ), defaultDateValue );
    let updateForm = /*html*/`
                        <div class="updateFormWrapper grid grid-cols-1">

                            <div class="nameUpdate my-3">

                            <span class="mb-3 px-1 text-xs font-semibold text-gray-400 uppercase">Name: </span>
                            <input type="text" name="nameUpdateCell" id="nameUpdateCell" disabled
                            value="${ doc.data().name }" 
                            class="border border-gray-200 bg-gray-200 rounded-lg w-full text-xs text-blue-500 tracking-widest py-4 lg:drop-shadow-none drop-shadow-2xl font-semibold" />
                            </div>

                            <div class="emailUpdate my-3">

                            <span class="mb-3 px-1 text-xs font-semibold text-gray-400 uppercase">Email: </span>
                            <input type="text" name="emailUpdateCell" id="emailUpdateCell" disabled
                            value="${ doc.data().email }" 
                            class="border border-gray-200 bg-gray-200 rounded-lg w-full text-xs text-blue-500 tracking-widest py-4 lg:drop-shadow-none drop-shadow-2xl font-semibold">
                            </div>

                            <div class="dateUpdate my-3">

                            <span class="mb-3 px-1 text-xs font-semibold text-gray-400 uppercase">Date: </span>
                            <input type="date" name="dateUpdateCell" id="dateUpdateCell" value="${ new Date( defaultDateValue ) }" 
                            class="border border-gray-200 bg-white rounded-lg w-full text-xs text-blue-500 tracking-widest py-4 lg:drop-shadow-none drop-shadow-2xl font-semibold">
                            </div>

                            <div class="dayUpdate my-3">

                            <span class="mb-3 px-1 text-xs font-semibold text-gray-400 uppercase">Day:</span>
                            <select name="aptDay" id="aptDay"
                            class="dayUpdateHolder border-gray-300 border rounded-lg w-full placeholder:text-blue-500 tracking-widest font-semibold lg:placeholder:text-xs py-4 aptDay lg:drop-shadow-none drop-shadow-2xl text-xs text-blue-500 tracking-widest">
                                <option value="${ doc.data().day }" class="font-semibold">
                                ${ doc.data().day }
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

                            <div class="timeSlotUpdate my-3">

                            <span class="mb-3 px-1 text-xs font-semibold text-gray-400 uppercase"> Time Slot: </span>
                            <select name="aptTimeSlot" id="aptTimeSlot"
                                class="timeSlotUpdateHolder border-gray-300 border rounded-lg w-full placeholder:text-blue-500 tracking-widest font-semibold lg:placeholder:text-xs py-4 aptTimeSlot text-xs text-blue-500 tracking-widest">
                                <option value="${ doc.data().timeSlot }" class="font-semibold">
                                ${ doc.data().timeSlot }
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

                            <div class="reasonToUpdate my-3">
                            <span class="mb-3 px-1 text-xs font-semibold text-gray-400 uppercase">Reason to Update:</span>
                            <textarea type="text" name="occurrenceUpdateCell" id="occurrenceUpdateCell" class="reasonToUpdate border border-gray-300 rounded-lg w-full placeholder:text-blue-500 tracking-widest lg:placeholder:text-xs placeholder:font-semibold font-semibold py-4 text-xs text-blue-500 tracking-widest"></textarea>
                            </div>
                            
                        </div>
                        <div class="updateCancelButtons mt-5">
                            <button class="bg-emerald-500 updateButton py-3 px-6 text-white text-xs lg:text-md tracking-widest rounded-full uppercase">Update</button>
                            <button class="bg-rose-500 cancelUpdateButton ml-2 py-3 px-6 text-white text-xs lg:text-md tracking-widest rounded-full uppercase">Cancel</button>
                        </div>
                        `
    updateAppointmentsSection.innerHTML = updateForm
}
