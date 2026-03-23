ESX = nil
Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj)
            ESX = obj
        end)
        Citizen.Wait(0)
        --TriggerServerEvent('MiTH_Donate:sv:load')
    end
end)
RegisterNetEvent('esx:addWeapon')
AddEventHandler('esx:addWeapon', function(i, j)    
    -- SendNUIMessage({
    --     type = "item-notify",
    --     class = 1,
    --     name = i,
    --     count = 1,
    --     label = loadoutInfo(i),
    -- })
    SendNUIMessage({
        action = "addNotification",
        Type = "Add",
        Label = loadoutInfo(i),
        Name = i,
        Amount = 1,
    })
end)

RegisterNetEvent('esx:removeWeapon')
AddEventHandler('esx:removeWeapon', function(i, j)
    -- SendNUIMessage({
    --     action = "addNotification",
    --     type = "item-notify",
    --     class = 2,
    --     name = i,
    --     count = 1,
    --     label = loadoutInfo(i),
    -- })
    SendNUIMessage({
        action = "addNotification",
        Type = "Remove",
        Label = loadoutInfo(i),
        Name = i,
        Amount = 1,
    })
end)


RegisterNetEvent('esx:addInventoryItem')
AddEventHandler('esx:addInventoryItem', function(item, count)
    local newValue, label
    local inventory = ESX.GetPlayerData().inventory

    for k,v in pairs(inventory) do
        if v.name == item then
            newValue = count - v.count
            label = v.label
        end
    end

    if label == nil then return end
    SendNUIMessage({
        action = "addNotification",
        Type = "Add",
        Label = label,
        Name = item,
        Amount = newValue,
    })
	-- SendNUIMessage({
    --     type = "item-notify",
    --     class = 1,
    --     name = item,
    --     count = newValue,
    --     label = label,
    -- })
end)

RegisterNetEvent('esx:removeInventoryItem')
AddEventHandler('esx:removeInventoryItem', function(item, count)
	local newValue, label
    local inventory = ESX.GetPlayerData().inventory

    for k,v in pairs(inventory) do
        if v.name == item then
            newValue = v.count - count
            label = v.label
        end
    end

    if label == nil then return end
    SendNUIMessage({
        action = "addNotification",
        Type = "Remove",
        Label = label,
        Name = item,
        Amount = newValue,
    })
	-- SendNUIMessage({
    --     type = "item-notify",
    --     class = 2,
    --     name = item,
    --     count = newValue,
    --     label = label,
    -- })
end)

RegisterNetEvent('esx:setAccountMoney')
AddEventHandler('esx:setAccountMoney', function(account)

    local newValue, label, alertType
    local accounts = ESX.GetPlayerData().accounts

    for k,v in pairs(accounts) do
		if v.name == account.name then
			if account.money > v.money then
				alertType = 1
				newValue = account.money - v.money
			else
				alertType = 2
				newValue = v.money - account.money
			end
            label = v.label
		end
	end
    SendNUIMessage({
        action = "addNotification",
        Type = alertType == 1 and "Add" or "Remove",
        Label = label,
        Name = account.name,
        Amount = newValue,
    })

    -- SendNUIMessage({
    --     type = "item-notify",
    --     class = alertType,
    --     name = account.name,
    --     count = newValue,
    --     label = label,
    -- })
end)

function loadoutInfo(request)
    for i=1, #ESX.GetWeaponList() do
        local e = ESX.GetWeaponList()[i]
        if e.name == request then
            return e.label
        end
    end
end